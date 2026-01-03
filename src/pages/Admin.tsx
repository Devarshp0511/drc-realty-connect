import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, Mail, Phone, Building, MessageSquare, Clock, CheckCircle, Circle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface ContactSubmission {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

const Admin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        fetchSubmissions();
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch submissions",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .update({ is_read: true })
        .eq("id", id);

      if (error) throw error;
      
      setSubmissions(prev => 
        prev.map(sub => sub.id === id ? { ...sub, is_read: true } : sub)
      );
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update submission",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const unreadCount = submissions.filter(s => !s.is_read).length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display font-bold text-2xl text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              {submissions.length} submissions • {unreadCount} unread
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              View Site
            </a>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {submissions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="font-display font-bold text-2xl text-foreground mb-2">No Submissions Yet</h2>
            <p className="text-muted-foreground">
              Contact form submissions will appear here.
            </p>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Submissions List */}
            <div className="lg:col-span-1 space-y-3">
              <h2 className="font-semibold text-foreground mb-4">All Submissions</h2>
              {submissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setSelectedSubmission(submission);
                    if (!submission.is_read) markAsRead(submission.id);
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    selectedSubmission?.id === submission.id
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/30 bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {submission.is_read ? (
                          <CheckCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-accent fill-accent flex-shrink-0" />
                        )}
                        <p className={`font-semibold truncate ${!submission.is_read ? "text-foreground" : "text-muted-foreground"}`}>
                          {submission.name}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground truncate mt-1">
                        {submission.company}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {format(new Date(submission.created_at), "MMM d, yyyy • h:mm a")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Submission Detail */}
            <div className="lg:col-span-2">
              {selectedSubmission ? (
                <motion.div
                  key={selectedSubmission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="font-display font-bold text-2xl text-foreground">
                        {selectedSubmission.name}
                      </h2>
                      <p className="text-muted-foreground flex items-center gap-2 mt-1">
                        <Building className="w-4 h-4" />
                        {selectedSubmission.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {format(new Date(selectedSubmission.created_at), "PPpp")}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <a 
                      href={`mailto:${selectedSubmission.email}`}
                      className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground">{selectedSubmission.email}</p>
                      </div>
                    </a>

                    <a 
                      href={`tel:${selectedSubmission.phone}`}
                      className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="font-medium text-foreground">{selectedSubmission.phone}</p>
                      </div>
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-accent" />
                      Message
                    </h3>
                    <div className="p-4 rounded-xl bg-background border border-border">
                      <p className="text-foreground whitespace-pre-wrap">{selectedSubmission.message}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Select a submission to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

package restws;
import java.util.*;

public class Response {
		
	public long numFound;
	public int start;
	private List<Patents> docs;
	
	public void setNumFound(long numFound)
	{
		this.numFound = numFound;
	}

	public void setStart(int start)
	{
		this.start = start;
	}

	public void setDocs(List<Patents> docs)
	{
		this.docs = docs;
	}
	
	public long getNumFound()
	{
		return numFound;
	}

	public int getStart()
	{
		return start;
	}
	
	public List<Patents> getDocs()
	{
		return docs;
	}
}
